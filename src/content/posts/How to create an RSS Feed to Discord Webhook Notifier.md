# How to create an RSS Feed to Discord Webhook Notifier

In this tutorial, we'll create a Python script that fetches data from an RSS feed, checks for new entries, and sends notifications to a Discord webhook for each new entry it finds. We'll use the `feedparser` library to parse the RSS feed and the `requests` library to send the notifications to the Discord webhook.

## Prerequisites

Before you begin, make sure you have the following installed:

-   Python: We'll use Python 3 for this tutorial.
-   Libraries: Ensure you have `feedparser` and `requests` libraries installed. You can install them using `pip`:



```py
pip install feedparser requests
```

## Step 1: Setting Up the Code

First, create a new Python file, let's call it `rss_to_discord.py`, and open it in a code editor or any text editor.

Next, paste the following code into the file:
```py
import feedparser
import asyncio
import requests
import os


DATA_FOLDER = "data"
if not os.path.exists(DATA_FOLDER):
    os.makedirs(DATA_FOLDER)


WEBHOOK_URL = ""


LAST_ENTRY_IDS = {
    "YOUR_RSS_FEED": None,
}


def load_last_id(feed_url):
    safe_filename = feed_url.replace("/", "_").replace("?", "_")
    file_path = os.path.join(DATA_FOLDER, f"{safe_filename}_last_id.txt")
    try:
        with open(file_path, "r") as file:
            return file.read().strip()
    except FileNotFoundError:
        return None


def save_last_id(feed_url, last_id):
    safe_filename = feed_url.replace("/", "_").replace("?", "_")
    file_path = os.path.join(DATA_FOLDER, f"{safe_filename}_last_id.txt")
    with open(file_path, "w") as file:
        file.write(last_id)


async def send_rss_news(feed_url):
    while True:
        feed = feedparser.parse(feed_url)
        if len(feed.entries) > 0:
            latest_entry = feed.entries[0]
            last_id = load_last_id(feed_url)
            if latest_entry.id != last_id:
                news_title = latest_entry.title
                news_link = latest_entry.link
                message = f" **{news_title}**\n{news_link}"
                

                payload = {"content": message}
                

                response = requests.post(WEBHOOK_URL, json=payload)
                if response.status_code == 204:
                    print("Novinka odeslána na Discord.")
                

                save_last_id(feed_url, latest_entry.id)
        

        await asyncio.sleep(60)

async def start_webhook_rss():
    tasks = [send_rss_news(feed_url) for feed_url in LAST_ENTRY_IDS.keys()]
    await asyncio.gather(*tasks)


loop = asyncio.get_event_loop()
loop.run_until_complete(start_webhook_rss())
```

The `start_webhook_rss` function starts the asyncio loop and runs the `send_rss_news` function for each RSS feed in the `LAST_ENTRY_IDS` dictionary. Finally, the code sets up the asyncio loop and runs it until all tasks are complete.

### Step 6: Configuring RSS Feeds and Discord Webhook

To use this script, you need to configure your RSS feeds and Discord webhook URL.

1.  Replace `"YOUR_RSS_FEED"` in the `LAST_ENTRY_IDS` dictionary with the URL of the RSS feed you want to monitor. You can add multiple feeds by separating them with commas.
    
2.  Set the `WEBHOOK_URL` variable to the URL of your Discord webhook. This is where the notifications will be sent.


### Step 7: Running the Script

Save the file and run the Python script using the following command:
```py
python rss_to_discord.py
```

The script will start monitoring the RSS feeds and send notifications to the Discord webhook whenever it detects a new entry.
