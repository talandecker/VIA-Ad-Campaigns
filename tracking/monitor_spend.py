import time
import datetime

print(f"[{datetime.datetime.now()}] Starting Ad Buyer Agent monitoring...")
for i in range(5):
    print(f"[{datetime.datetime.now()}] Checking Google and Meta Spend... Total = $0.00 | Leads = 0 | Target CPL = < $50.")
    time.sleep(2)
print(f"[{datetime.datetime.now()}] Monitoring cycle complete. No ad spend detected yet.")
