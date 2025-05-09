import React, { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		token: localStorage.getItem("token") || null,
		userId: localStorage.getItem("userId") || null,
		role: localStorage.getItem("role") || null,
	})

	const logout = () => {
		localStorage.clear()
		setAuth({ token: null, userId: null, role: null })
	}

	return (
		<AuthContext.Provider value={{ auth, setAuth, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
