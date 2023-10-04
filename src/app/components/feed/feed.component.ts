import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from '../model/Tweet';
import { MatDialog } from '@angular/material/dialog';

import { ComfirmDialogComponent } from "../comfirm-dialog/comfirm-dialog.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  public readonly LOCAL_STORAGE_LOCATION = "tweets";

  @Input() tweet: Tweet;
  @Output() onTweetDeleted: EventEmitter<Tweet> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
      data: this.tweet,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.uuid) {
        this.onTweetDeleted.emit(this.tweet);
      }
    });
  }

  delete(): void {
    this.openDialog();
  }
}
