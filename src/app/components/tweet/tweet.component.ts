import { Component, Input, OnInit } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { environment } from "../../../environment";

import { Tweet } from '../model/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  
  @Input() public maxChars: number = 130;

  public tweet: string;
  public tweetCharacters: number = 0;

  public tweets: Tweet[] = [];

  ngOnInit(): void {
    const tweetsString: string | null = localStorage.getItem(environment.localStorageKey);
    if (tweetsString != null) {
      const tweet_obj: Tweet[] = JSON.parse(tweetsString);
      this.tweets = tweet_obj;
    }
  }

  addTweet(): void {
    if (this.tweet.length > 0 && this.tweet.length <= this.maxChars) {
      const newTweet: Tweet = new Tweet(uuidv4(), this.tweet, new Date());
      this.tweets.push(newTweet);
      this.tweet = "";
      this.setTweetsInLocalStorage();
    }
  }

  onTweetDelete(toDelete: Tweet): void {
    const newData = this.tweets.filter((twt) => twt.uuid !==  toDelete.uuid);
    this.tweets = newData;
    this.setTweetsInLocalStorage();
  }

  private setTweetsInLocalStorage(): void {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(this.tweets));
  }

  onInput(text: string): void {
    let length: number = text.length;

    if (length > this.maxChars) {
      return;
    }
    this.tweet = text;
    this.tweetCharacters = length;
  }
}
