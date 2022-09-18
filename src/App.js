import Banner from './components/Banner'
import ShoppingList from './components/ShoppingList'
import Cart from './components/Cart'

function App() {
    return (<div>
			<Banner  hello="hello world" />
			<Cart />
			<ShoppingList />
		</div>);
}

export default App