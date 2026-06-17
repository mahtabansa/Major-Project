import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../redux/userSlice';
export const GetItem = async () => {
      const dispatch = useDispatch();
      const {currentUser} = useSelector(state=>state.user)
       const api_url = import.meta.env.VITE_APP_API_URL;

      useEffect(() => {
            const fetchSellerItems = async () => {
                  try {
                        const items = await axios.get(`${api_url}/api/items/get-items`, { withCredentials: true });
                        dispatch(setItems(items?.data?.items))
                  } catch (error) {
                        console.error("Error fetching current user:", error);
                        return null;
                  }
            };
            fetchSellerItems();
      }, []);
}
