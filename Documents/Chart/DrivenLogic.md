``` mermaid

graph TD
    A[Navbar] -->|Home| B(Home)
    A -->|About| C(About)
    A -->|Mileage| D(Mileage)
    A -->|Contact| E(Contact)
    D -->|Login| F(Login)
    F -->|Create Account or Sign In| G(Mileage)
    B -->|Download App| H(Download App)
    C -->|Download App| I(Download App)
    E -->|Email Form| J(Email Form)
    D -->|ADD| K(ADD)
    D -->|LIST| L(LIST)
    D -->|EXPORT| M(EXPORT)
    K -->|Upload JSON file| N(Upload JSON file)
    L -->|View Journey Data| O(View Journey Data)
    L -->|Add Categories and Comments| P(Add Categories and Comments)
    M -->|Export Data| Q(Export Data)

```