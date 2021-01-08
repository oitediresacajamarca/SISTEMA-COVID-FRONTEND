import { Component, OnInit, ViewChild } from '@angular/core';
import { GMap } from 'node_modules/primeng/gmap';
import { CovidRefService } from 'src/app/servicios/covid-ref.service';
import { DistritosService } from 'src/app/servicios/distritos.service';


declare var google: any; //new added line 
@Component({
  selector: 'app-georeferencias-ubicaciones-positivas',
  templateUrl: './georeferencias-ubicaciones-positivas.component.html',
  styleUrls: ['./georeferencias-ubicaciones-positivas.component.css']
})
export class GeoreferenciasUbicacionesPositivasComponent implements OnInit {

  constructor(
    private covid: CovidRefService,
    private georefs: DistritosService) { }


  options: any;

  overlays: any[] = [];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;
  heatmapdata: any[] = []
  @ViewChild('gmap2', { static: false }) map: GMap

  ngOnInit() {
    this.options = {
      center: { lat: -6.4341326741444, lng: -78.70264353085936 },
      zoom: 8,
      data: []
    };
    this.cargarGeoreferencias()
  }




  cargarGeoreferencias() {


    this.covid.devolverGeoReferencias().subscribe((geo) => {
      geo.forEach(element => {
        console.log(element)
        this.overlays.push(new google.maps.Marker({ position: { lat: element.lat, lng: element.lng }, title: element.id+'' }))
      });
    })



  }

  handleMapClick(event) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }





  initOverlays() {
    var heatmapData = [
      new google.maps.LatLng(-7.1606346, -78.5392219),

    ];


    if (!this.overlays || !this.overlays.length) {
      this.overlays = [

        new google.maps.visualization.HeatmapLayer({
          data: this.heatmapdata,
        })
      ];
    }

  }

  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom() - 1);
  }

  cargarDistrito(cod_distrito: string) {
    this.georefs.devolverGeoreferncia(cod_distrito).subscribe((distrito) => {
      this.overlays = []
      let map = this.map.getMap()

      console.log(distrito)
      this.overlays.push()

    })

  }

  clear() {

    this.overlays = [

    ];
  }



}
