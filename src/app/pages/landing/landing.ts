import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Hero } from "../../components/hero/hero";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Hero, Skills, Projects],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
