import { Component } from '@angular/core';
import { Article } from '../models/article';
import { Comment } from '../models/comment';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article: Article = {
    id: 1,
    title: "Products",
    author: "Ajay Rathod",
    body: "Angular is a TypeScript framework widely used to make web app and mobile apps."
  };

  comments: Comment[] = [
    { articleId: 1, body: "Good, Keep it up!" }
  ];

  newComment: string = '';

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push({ articleId: this.article.id, body: this.newComment });
      this.newComment = '';
    }
  }
}
