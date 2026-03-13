# Angular Class - Exam Cheatsheet

Deze repository bevat meerdere Angular-oefeningen:

- `Oefeningen/Hello-World`
- `OneWayBinding`
- `demo-attributeBinding`
- `event-binding-demo`

## Snel starten

Ga eerst naar het project waarin je wil werken:

```bash
cd OneWayBinding
```

Installeer daarna de packages:

```bash
npm install
```

Start de development server:

```bash
npm start
```

Of rechtstreeks via Angular CLI:

```bash
ng serve
```

De app draait dan meestal op:

```text
http://localhost:4200
```

## Belangrijke npm-commando's

```bash
npm install
npm start
npm run build
npm run watch
npm test
```

Wat doen ze?

- `npm install`: installeert alle dependencies uit `package.json`
- `npm start`: start `ng serve`
- `npm run build`: maakt een build van je Angular-project
- `npm run watch`: build automatisch opnieuw bij wijzigingen
- `npm test`: voert de tests uit

## Belangrijke Angular CLI-commando's

### Project starten

```bash
ng serve
ng serve -o
ng serve --port 4300
```

- `ng serve`: start je Angular-app lokaal
- `ng serve -o`: opent meteen de browser
- `ng serve --port 4300`: handig als poort `4200` al in gebruik is

### Nieuw Angular-project maken

```bash
ng new mijn-app
cd mijn-app
npm install
ng serve
```

## Code genereren

### Component

```bash
ng generate component components/naam
ng g c components/naam
```

### Service

```bash
ng generate service services/naam
ng g s services/naam
```

### Interface

```bash
ng generate interface models/naam
ng g i models/naam
```

### Class

```bash
ng generate class models/naam
ng g cl models/naam
```

### Directive en Pipe

```bash
ng g d directives/naam
ng g p pipes/naam
```

## Handige examenflow

Als je op het examen een bestaand project krijgt of moet aanvullen:

```bash
cd projectnaam
npm install
ng serve -o
```

Als je iets nieuws moet toevoegen:

```bash
ng g c components/naam
ng g s services/naam
ng g i models/naam
```

Voor controle op het einde:

```bash
npm run build
npm test
```

## Extra tips

- Gebruik `ng g ...` als korte versie van `ng generate ...`
- Controleer altijd in welke map je zit voor je een command uitvoert
- Als `ng` niet werkt, gebruik dan de `npm` scripts uit `package.json`
- Start bij voorkeur met `npm install` wanneer je een project voor het eerst opent
- Doe op het einde altijd minstens een `build` om compileerfouten op te sporen
