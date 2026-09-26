import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import GifList from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  //imports: [GifList],
  templateUrl: './trending-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage {

  GifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  // ngAfterViewInit(): void {
  //   const scrollDiv = this.scrollDivRef()?.nativeElement;
  //   if (!scrollDiv) return;

  //   scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  // }

  onScroll(event: Event) {

    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    const ScrollTop = scrollDiv.scrollTop;
    const ClientHeight = scrollDiv.clientHeight;
    const ScrollHeight = scrollDiv.scrollHeight;



    const isAtBottom = ScrollTop + ClientHeight + 300 >= ScrollHeight;

    if (isAtBottom) {
      this.GifService.loadTrendingGifs();
    }
  }

}
