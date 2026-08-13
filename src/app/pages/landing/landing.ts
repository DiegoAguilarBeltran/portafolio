import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Hero } from "../../components/hero/hero";

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Hero],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
