# Ewaluator Lekcji

Aplikacja webowa stworzona w **Next.js**, umożliwiająca nauczycielom szybkie sprawdzenie, w jakim stopniu uczniowie rozumieją zagadnienia omawiane podczas lekcji. Nauczyciel może utworzyć sesję z własnymi pytaniami, a uczniowie dołączają do niej za pomocą kodu QR i oceniają poziom zrozumienia poszczególnych tematów.

## Funkcjonalności

### Tworzenie sesji

* Nauczyciel może utworzyć nową sesję ewaluacyjną.
* Do każdej sesji można dodać własne pytania lub zagadnienia.
* Każda sesja posiada unikalny identyfikator.
* Nauczyciel może rozpocząć oraz manualnie zakończyć aktywną sesję.

### Dołączanie za pomocą kodu QR

* Uczniowie mogą szybko dołączyć do odpowiedniej sesji za pomocą kodu QR.
* Kod QR kieruje użytkownika bezpośrednio do aktywnej sesji.
* Uczniowie nie muszą zakładać konta, aby wziąć udział w ewaluacji.

### Ocenianie zrozumienia

Podczas aktywnej sesji uczniowie odpowiadają na przygotowane przez nauczyciela pytania dotyczące omawianych zagadnień.

Dla każdego pytania użytkownik może wybrać jedną z trzech odpowiedzi:

* 😊 **Rozumiem** – zagadnienie jest zrozumiałe.
* 😐 **Częściowo rozumiem** – zagadnienie jest zrozumiałe tylko częściowo.
* ☹️ **Nie rozumiem** – zagadnienie wymaga dodatkowego wyjaśnienia.

Aktualnie oceniane zagadnienie jest wyświetlane nad przyciskami odpowiedzi, dzięki czemu udzielenie odpowiedzi jest szybkie i intuicyjne.

### Przebieg sesji

* W jednej sesji może uczestniczyć wielu uczniów.
* Odpowiedzi użytkowników są zapisywane w bazie danych MongoDB.
* Uczniowie przechodzą kolejno przez pytania przygotowane przez nauczyciela.
* Sesja może zostać zakończona manualnie przez nauczyciela.
* Po zakończeniu ewaluacji nauczyciel otrzymuje dostęp do wyników sesji.

### Wyniki i statystyki

Po zakończeniu sesji nauczyciel może sprawdzić wyniki dla każdego z przygotowanych pytań.

Statystyki obejmują:

* Procent uczniów, którzy rozumieją dane zagadnienie.
* Procent uczniów, którzy częściowo rozumieją dane zagadnienie.
* Procent uczniów, którzy nie rozumieją danego zagadnienia.
* Oddzielne wyniki dla każdego pytania.
* Czytelne przedstawienie poziomu zrozumienia poszczególnych zagadnień przez klasę.

### Zarządzanie pytaniami

* Nauczyciel może tworzyć własne pytania.
* Pytania mogą dotyczyć konkretnych tematów, pojęć lub zagadnień omawianych podczas lekcji.
* Jedna sesja może zawierać wiele pytań.

### API

Aplikacja wykorzystuje wbudowany w **Next.js** system API do komunikacji pomiędzy interfejsem użytkownika a bazą danych.

Endpointy API odpowiadają między innymi za:

* Pobieranie informacji o sesji.
* Zapisywanie odpowiedzi użytkowników.
* Pobieranie odpowiedzi należących do konkretnej sesji.
* Obsługę danych potrzebnych do wyświetlenia wyników ewaluacji.

### Baza danych

Do przechowywania danych wykorzystywana jest baza **MongoDB**.

Komunikacja pomiędzy aplikacją a bazą danych realizowana jest przy użyciu **Mongoose**, które odpowiada za definiowanie modeli oraz obsługę danych aplikacji.

W bazie przechowywane są między innymi:

* Sesje ewaluacyjne.
* Pytania należące do poszczególnych sesji.
* Odpowiedzi udzielane przez uczestników.
* Dane potrzebne do wygenerowania wyników sesji.

## Technologie

Aplikacja została stworzona przy użyciu:

* Next.js
* React
* TypeScript
* Tailwind CSS
* MongoDB
* Mongoose
* Next.js API

## Cele projektu

Projekt został stworzony jako narzędzie ułatwiające nauczycielom szybką ocenę poziomu zrozumienia materiału przez uczniów.

Główne założenia projektu to:

* Prosty i intuicyjny interfejs użytkownika.
* Szybkie dołączanie do sesji za pomocą kodu QR.
* Łatwy sposób udzielania odpowiedzi przez uczniów.
* Obsługa wielu uczestników w ramach jednej sesji.
* Zapisywanie danych w bazie MongoDB.
* Komunikacja z bazą danych poprzez własne endpointy API.
* Automatyczne generowanie statystyk na podstawie odpowiedzi uczniów.
* Czytelna prezentacja wyników dla nauczyciela.
* Responsywny interfejs wykorzystujący Tailwind CSS.
* Modularna i łatwa w utrzymaniu struktura aplikacji.

## Screenshots

<p align="center">
<img width="1920" height="965" alt="ewaluator" src="https://github.com/user-attachments/assets/0314ad3e-5095-47c4-be38-b6c1fe6b06e8" />
<img width="1920" height="965" alt="ewaluator2" src="https://github.com/user-attachments/assets/59e0a036-8a71-4a6a-a97e-c018fa0acf3c" />
<img width="1920" height="965" alt="ewaluator3" src="https://github.com/user-attachments/assets/b18dc16f-1f21-44de-b70e-9c62fe7eeca3" />

</p>

<p align="center">
<img width="1920" height="965" alt="ewaluator4" src="https://github.com/user-attachments/assets/10fdb3b3-fb2e-4d8a-a1d4-c1b3e6185358" />
<img width="1920" height="965" alt="ewaluator5" src="https://github.com/user-attachments/assets/8f353f8c-fac1-4e9d-ad9e-14db1e8e9d9a" />

</p>

## Licencja

Projekt został stworzony w celach edukacyjnych oraz jako część mojego portfolio.
