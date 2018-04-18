# Zad.1.
## 1.1.
#### Dana jest tablica z liczbami całkowitymi, np: [2,3,7,4,9]. Napisz funkcję, która wypisze brakujące liczby z przedziału od 1 do 10.

##### Rozwiązanie: 
Zadanie wykonane w JavaScript ES6 w oparciu o funkcję indexOf().
## 1.2.
#### Napisz funkcję, która po odkliknięciu pola input rozdzieli ciąg znaków spacją - spacja po dwóch znakach, następnie po czterech (np. 20 3333 3333 3333).
##### Rozwiązanie:
Zadanie wykonane w JavaScript ES6. Dodatkowe założenia:
1. Numer może składać się z dowolnej ilości cyfr
2. Prosta walidacja pola input
    - rozdzielenie znaków wykona się tylko dla liczb i podświetli pole na zielono
    - w innych przypadkach wyświetli komunikat o błędzie i podświetli pole na czerwono
# Zad.2.
#### Wykonaj menu rozwijane, które odwzorowuje przykład: Drop_Down
##### Rozwiązanie:
Zadanie wykonane w JavaScript ES6 + jQuery.
# Zad.3.
#### Przedstaw zestaw danych w wybranej przez siebie formie. 
##### Dane:
- liczba porządkowa
- imię i nazwisko
- numer telefonu
- wiek
##### Wskazówki:
- lista powinna składać się z minimum 3 pozycji
- prezentacja danych powinna być przyjazna dla użytkownika (UX)
- utworzone rozwiązanie powinno być skalowalne (powinno sprawdzać się zarówno w przypadku 5, jak i 500 osób zapisanych w bazie)
- wybór zarówno technologii, jak i narzędzi, których użyjesz do wykonania zadania, należy do Ciebie. Zdecyduj, które najlepiej nadadzą się do realizacji polecenia i zgodnie z własnym uznaniem je zastosuj.
##### Rozwiązanie:
Zadanie wykonane w JavaScript ES6 + React.js. Projekt utworzono przy pomocy `react-creat-app`. Aplikację można wyświetlić używając kolejno komend `npm install`, `npm start`. Dodatkowe założenia:
1. Przyjęto, że dane dotyczą "użytkowników"
2. Dodawanie nowych użytkowników
    - użytkownik zostanie dodany, jeśli zostaną wypełnione pola "imię i nazwisko" oraz "numer telefonu"
    - w polach "numer telefonu" i "wiek" można wpisać tylko liczby
    - nowemu użytkownikowi zostanie automatycznie nadany numer "LP", kolejny lub brakujący
3. Usuwanie użytkowników
4. Sortowanie użytkowników wg "LP" od najmniejszego do największego
