'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var rxjs = require('rxjs');
var reactRouter = require('react-router');

const initialState = {
    isAuth: false,
    checked: false
};
const AuthContext = React__default.createContext(initialState);

const AuthSubject = new rxjs.Subject();

const AuthContextProvider = ({ getStoredAuthValue, children }) => {
    const [isAuth, setAuth] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    React.useEffect(() => {
        const subscription = AuthSubject.subscribe(value => {
            setAuth(value);
        });
        if (getStoredAuthValue) {
            const result = getStoredAuthValue();
            Promise.resolve(result).then(value => {
                setAuth(value);
                setChecked(true);
            });
        }
        else {
            setChecked(true);
        }
        return () => {
            subscription.unsubscribe();
        };
    }, []);
    return React__default.createElement(AuthContext.Provider, { value: { isAuth, checked } }, children);
};

const ProtectedComponent = ({ children, fallbackComponent }) => {
    const { isAuth } = React.useContext(AuthContext);
    return (React__default.createElement(React__default.Fragment, null, isAuth
        ? children
        : fallbackComponent ? fallbackComponent : React__default.createElement(React__default.Fragment, null)));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const ProtectedRoute = (_a) => {
    var { redirectPath, component: Component, loadingComponent } = _a, rest = __rest(_a, ["redirectPath", "component", "loadingComponent"]);
    const { isAuth, checked } = React.useContext(AuthContext);
    const render = (props) => {
        if (checked) {
            if (isAuth)
                return React__default.createElement(Component, Object.assign({}, props));
            else
                return React__default.createElement(reactRouter.Redirect, { to: redirectPath });
        }
        else {
            if (loadingComponent)
                return loadingComponent;
            else
                return React__default.createElement(React__default.Fragment, null);
        }
    };
    return React__default.createElement(reactRouter.Route, Object.assign({}, rest, { render: render }));
};

const useAuth = () => {
    return React.useContext(AuthContext);
};

exports.AuthContext = AuthContext;
exports.AuthContextProvider = AuthContextProvider;
exports.AuthSubject = AuthSubject;
exports.ProtectedComponent = ProtectedComponent;
exports.ProtectedRoute = ProtectedRoute;
exports.useAuth = useAuth;
//# sourceMappingURL=index.js.map
