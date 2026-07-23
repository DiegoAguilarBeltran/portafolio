import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-landing',
  imports: [Header, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
