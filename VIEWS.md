# Dashboard

  '/'
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerawacji i eventów zaplanowanych na dzisiaj


# Logowanie

  '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

  '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji i wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = blok 30 min
    - ma przypominać widok tygodnia w kalendarzu Google
    - po kliknięciu rezewacji lub eventu przechodzimy na stronę szczegółów

  '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian

  '/tables/booking/new'
  - analogicznie do poprzedniej ale bez początkowych informacji

  '/tables/events/:id'
  - analogicznie do powyższej dla eventów

  '/tables/events/new'
  - analogicznie do powyższej bez początkowych informacji

# Widok kelnera

  '/waiter'
  - tabela
    - wiersze - stoliki
    - kolumny - różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika

  '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia

  '/waiter/order/:id'
  - jak powyższa

# Widok kuchni

  '/kitchen'
  - wyświetla listę zamówień w kolejności złożenia
  - lista musi zawierać:
    - nr stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
