import { Pipe, PipeTransform } from "@angular/core";

//Pipe en Angular
@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(vuela: boolean): string {

        if(vuela){
            return 'Vuela'
        }else{
            return 'No vuela'
        }

    //   return (vuela) ? 'vuela' : 'no vuela';
    }
}