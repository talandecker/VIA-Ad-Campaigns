from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import datetime
import requests

app = Flask(__name__)
CORS(app)

# Very basic DB setup
def init_db():
    conn = sqlite3.connect('leads.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS leads
                 (id INTEGER PRIMARY KEY, name TEXT, phone TEXT, zip TEXT, insurance TEXT, date TEXT)''')
    conn.commit()
    conn.close()

init_db()

@app.route('/capture', methods=['POST'])
def capture_lead():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    zip_code = data.get('zip')
    insurance = data.get('insurance')
    
    # Save to local database for proof
    conn = sqlite3.connect('leads.db')
    c = conn.cursor()
    c.execute("INSERT INTO leads (name, phone, zip, insurance, date) VALUES (?, ?, ?, ?, ?)",
              (name, phone, zip_code, insurance, datetime.datetime.now().isoformat()))
    conn.commit()
    conn.close()
    
    # Forward to VI.A CRM (simulated)
    # response = requests.post("https://api.vi-a.com/crm/lead", json=data)
    
    return jsonify({"status": "success", "message": "Lead captured and stored locally securely."}), 200

import os
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
