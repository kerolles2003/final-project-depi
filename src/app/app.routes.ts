import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReadingComponent } from './reading/reading.component';
import { ListeningComponent } from './listening/listening.component';
import { CharactersComponent } from './characters/characters.component';
import { PlacesComponent } from './places/places.component';
import { HieroglyphsComponent } from './hieroglyphs/hieroglyphs.component';
import { Characters2Component } from './characters2/characters2.component';
import { Places2Component } from './places2/places2.component';
import { Hieroglyphs2Component } from './hieroglyphs2/hieroglyphs2.component';
import { CategoriesComponent } from './categories/categories.component';
import { PyramidsComponent } from './pyramids/pyramids.component';
import { SphinxComponent } from './sphinx/sphinx.component';
import { ValleyOfTheKingsComponent } from './valley-of-the-kings/valley-of-the-kings.component';
import { KarnakComponent } from './karnak/karnak.component';
import { LuxorTempleComponent } from './luxor-temple/luxor-temple.component';
import { TempleOfHatshepsutComponent } from './temple-of-hatshepsut/temple-of-hatshepsut.component';
import { EdfuComponent } from './edfu/edfu.component';
import { AbuSimbelComponent } from './abu-simbel/abu-simbel.component';
import { DjoserComponent } from './djoser/djoser.component';
import { PhilaeComponent } from './philae/philae.component';
import { DahshurComponent } from './dahshur/dahshur.component';
import { AmarnaComponent } from './amarna/amarna.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    }, 
    {
        path: "log-in",
        component:LogInComponent,
    }, 
    {
        path: "sign-up",
        component:SignUpComponent,
    }, 
    {
        path: "about-us",
        component:AboutUsComponent,
    },    
    {
        path: "reading",
        component:ReadingComponent,
    },  
    {
        path: "listening",
        component:ListeningComponent,
    },  
    {
        path: "characters",
        component:CharactersComponent,
    }, 
    {
        path: "places",
        component:PlacesComponent,
    }, 
    {
        path: "hieroglyphs",
        component:HieroglyphsComponent,
    }, 
    {
        path: "characters2",
        component:Characters2Component,
    }, 
    {
        path: "places2",
        component:Places2Component,
    }, 
    {
        path: "hieroglyphs2",
        component:Hieroglyphs2Component,
    }, 
    {
        path: "categories",
        component:CategoriesComponent,
    },
    {
        path: "pyramids",
        component:PyramidsComponent,
    },
    {
        path: "sphinx",
        component:SphinxComponent,
    },
    {
        path: "Valley_of_the_Kings",
        component:ValleyOfTheKingsComponent,
    },
    {
        path: "karnak",
        component:KarnakComponent,
    },
    {
        path: "luxor_temple",
        component: LuxorTempleComponent,
    },
    {
        path: "temple_of_hatshepsut",
        component: TempleOfHatshepsutComponent,
    },
    {
        path: "edfu",
        component: EdfuComponent,
    },
    {
        path: "abu_simbel",
        component: AbuSimbelComponent,
    },
    {
        path: "djoser",
        component: DjoserComponent,
    },
    {
        path: "philae",
        component: PhilaeComponent,
    },
    {
        path: "dahshur",
        component: DahshurComponent,
    },
    {
        path: "amarna",
        component: AmarnaComponent,
    },


];
