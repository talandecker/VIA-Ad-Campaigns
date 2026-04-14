import csv

campaigns = [
    {"target_zip": "75038", "city": "Irving, TX", "incident": "Hail"},
    {"target_zip": "33101", "city": "Miami, FL", "incident": "Wind"}
]

def generate_copy():
    ads = []
    for camp in campaigns:
        headline = f"{camp['incident']} Storm in {camp['city']}? Free Roof Inspection!"
        body = f"Attention {camp['city']} homeowners. Recent {camp['incident'].lower()} storms might have damaged your roof. Take our 30-second quiz to see if your insurance covers a full replacement."
        ads.append({
            "Campaign": camp['city'],
            "Headline": headline,
            "Description": body
        })
    
    with open('ad_copy.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=["Campaign", "Headline", "Description"])
        writer.writeheader()
        writer.writerows(ads)
        
    print("Generated ad copies to ad_copy.csv")

if __name__ == '__main__':
    generate_copy()
