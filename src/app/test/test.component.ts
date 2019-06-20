import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

declare const Konva: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // public configStage = new BehaviorSubject({
  //   width: 200,
  //   height: 200
  // });
  // public configCircle = new BehaviorSubject({
  //   x: 100,
  //   y: 100,
  //   radius: 70,
  //   fill: 'red',
  //   stroke: 'black',
  //   strokeWidth: 4
  // });
  //
  // public configCircle2 = new BehaviorSubject({
  //   x: 200,
  //   y: 100,
  //   radius: 70,
  //   fill: 'red',
  //   stroke: 'black',
  //   strokeWidth: 4
  // });
  //
  // circleList = [this.configCircle, this.configCircle2];
  //
  // public handleClick(event: any, index: number) {
  //   console.log('Hello Circle' + index, event);
  //   this.circleList[index].next({...this.circleList[index].getValue(),
  //     fill: 'blue'
  //   });
  // }
  stage;
  layer;

  ngOnInit() {
    // setTimeout(() => {
    //   this.configStage.next({
    //     width: 500,
    //     height: 200
    //   });
    // }, 1000);
    this.drawSomething();
  }

  drawSomething() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.stage = new Konva.Stage({
      container: 'container',
      width: width - 20,
      height: height - 36
    });

    this.layer = new Konva.Layer(
      // {
      //   draggable: true
      // }
    );

    let rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });

    let rect2 = new Konva.Rect({
      x: 150,
      y: 50,
      width: 100,
      height: 50,
      fill: 'blue',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });

    // add the shape to the layer
    this.layer.add(rect);
    this.layer.add(rect2);

    // add the layer to the stage
    this.stage.add(this.layer);
  }

  addRectangle() {
    console.log('add');
    let rect2 = new Konva.Rect({
      x: 150,
      y: 50,
      width: 100,
      height: 50,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });

    // add the shape to the layer
    this.layer.add(rect2);
    this.layer.draw();
  }
}
