import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Language } from "src/app/models/language.model";
import { TextContent } from "src/app/models/text-content.model";
import { TextContentService } from "src/app/services/text-content.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() language: Language = Language.English;
  @Output() isUserLoggedIn: EventEmitter<void> = new EventEmitter<void>();

  articleMenuText: string;
  blogMenuText: string;
  newsMenuText: string;
  logoutMenuText: string;

  constructor(private userService: UserService, private textContentService: TextContentService) {
  }

  ngOnInit(): void {
    this.textContentService.getTextContent(this.language).subscribe((content: TextContent) => {
      this.articleMenuText = content.Global_Menu_ArticleButton;
      this.blogMenuText = content.Global_Menu_BlogButton;
      this.newsMenuText = content.Global_Menu_NewsButton;
      this.logoutMenuText = content.Global_Menu_LogoutButton;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes["language"].firstChange)
      this.textContentService.getTextContent(this.language).subscribe((content: TextContent) => {
        this.articleMenuText = content.Global_Menu_ArticleButton;
        this.blogMenuText = content.Global_Menu_BlogButton;
        this.newsMenuText = content.Global_Menu_NewsButton;
        this.logoutMenuText = content.Global_Menu_LogoutButton;
      });
  }

  logout() {
    this.userService.logout();
    this.isUserLoggedIn.emit();
  }
}