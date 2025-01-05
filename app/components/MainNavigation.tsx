import React from 'react'
import {NavLink} from "@remix-run/react";

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
    return (
        <nav id="navigation" className="bg-blue-600 text-white py-4 shadow-md">
            <ul className="flex justify-center space-x-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md ${
                                isActive
                                    ? 'bg-blue-800 text-white'
                                    : 'hover:bg-blue-700 hover:text-white'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/notes"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md ${
                                isActive
                                    ? 'bg-blue-800 text-white'
                                    : 'hover:bg-blue-700 hover:text-white'
                            }`
                        }
                    >
                        Notes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

