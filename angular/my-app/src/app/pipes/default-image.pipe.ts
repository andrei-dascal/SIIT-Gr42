import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "defaultImage"
})
export class DefaultImagePipe implements PipeTransform {
    transform(imageUrl: string, fallbackImageUrl: string) {
        if (imageUrl !== '')
            return imageUrl;

        if (fallbackImageUrl !== '')
            return fallbackImageUrl;

        return 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1682961944~exp=1682962544~hmac=7684c77ff829c5fdd96d5b95190a023ee3b59349c09f23d6cc90d1a4c67e947f';
    }
}