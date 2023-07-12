"use client"
import { store } from '@utils/store/store'
import React from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default StoreProvider