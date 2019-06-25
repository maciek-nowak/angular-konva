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
  overLayer;
  text;
  stageScale = 1;

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
      width: width - 36,
      height: height - 36,
      draggable: true,
      x: 100,
      y: 100
    });

    this.layer = new Konva.Layer(
      // {
      //   draggable: true
      // }
    );

    let rect = new Konva.Rect({
      x: 50,
      y: 25,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      offset: {
        x: 50,
        y: 25
      },
      name: 'primal'
    });

    let rect2 = new Konva.Rect({
      x: 150,
      y: 25,
      width: 100,
      height: 50,
      fill: 'blue',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      offset: {
        x: 50,
        y: 25
      },
      name: 'primal'
    });

    this.text = new Konva.Text({
      x: 10,
      y: 10,
      fontFamily: 'Calibri',
      fontSize: 24,
      text: '',
      fill: 'black'
    });

    // add the shape to the layer
    this.layer.add(rect);
    this.layer.add(this.text);
    this.layer.add(rect2);

    // add the layer to the stage
    this.stage.add(this.layer);

    this.stage.on('wheel', e => {
      e.evt.preventDefault();
      this.stageScale =
        e.evt.deltaY > 0 ? this.stageScale * 1.01 : this.stageScale / 1.01;

      this.stage.scale({
        x: this.stageScale,
        y: this.stageScale
      });

      let primalRects = this.layer.find('.primal');
      primalRects.forEach(primalRect => primalRect.scale({x: 1 / this.stageScale, y: 1 / this.stageScale}));
      this.stage.draw();
    });
  }

  addRectangle() {
    console.log('add');
    let rect2 = new Konva.Rect({
      x: 100,
      y: 0,
      width: 100,
      height: 50,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      name: 'addedRect'
    });

    rect2.on('click', e => {
      console.log(e.target._id);
      rect2.fill('pink');
      rect2.stroke('green');
      rect2.draw();
  });

    // add the shape to the layer
    this.layer.add(rect2);
    this.layer.draw();
  }

  removeAddedRectangles() {
    // let pinks = this.layer.find();
    let pinks = this.layer.find('.addedRect');
    console.log(pinks);
    pinks.forEach(pink => pink.destroy());
    this.layer.draw();
  }

  writeMessage(message) {
    this.text.text(message);
    this.layer.draw();
  }

  getFromApi() {
    fetch('/koty')
      .then(response => response.json())
      .then((data) => console.log(data));
  }
}
