import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import SendMail from "./pages/SendMail";
import Settings from "./pages/Settings";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="/mail" element={<SendMail />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
