import { CartPageContainer } from "./styled"


interface CartPageProps {
  snacks?: any
}

export default function CartPage({snacks} : CartPageProps){

  return <CartPageContainer>
    <div>
      <h1>Meus Pedidos</h1>
      <section>

        <div className="description">
          <p>LANCHE</p>
          <p>QTD</p>
          <p>SUBTOTAL</p>
        </div>

        {snacks?.map((snack)=>(
          <h1 key={snack.id}>{snack.name}</h1>
        ))}
      </section>


    </div>
  </CartPageContainer>
}
