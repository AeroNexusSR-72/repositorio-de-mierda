class Arbol {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        this.raiz = this.#insertarRec(this.raiz, valor);
    }

    #insertarRec(nodo, valor) {
        if (nodo === null) {
            return new Nodo(valor);
        }
        if (valor < nodo.valor) {
            nodo.izquierdo = this.#insertarRec(nodo.izquierdo, valor);
        } else if (valor > nodo.valor) {
            nodo.derecho = this.#insertarRec(nodo.derecho, valor);
        }
        return nodo;
    }

    // Generar estructura visual
    generarHTML(nodo = this.raiz) {
        if (!nodo) return null;

        const divNodo = document.createElement("div");
        divNodo.className = "nodo";
        divNodo.innerText = nodo.valor;

        // Recursivamente crear los subárboles
        const subArbolIzquierdo = this.generarHTML(nodo.izquierdo);
        const subArbolDerecho = this.generarHTML(nodo.derecho);

        if (subArbolIzquierdo || subArbolDerecho) {
            const contenedorHijos = document.createElement("div");
            contenedorHijos.className = "contenedor-hijos";
            if (subArbolIzquierdo) contenedorHijos.appendChild(subArbolIzquierdo);
            if (subArbolDerecho) contenedorHijos.appendChild(subArbolDerecho);
            divNodo.appendChild(contenedorHijos);
        }

        return divNodo;
    }
}

// Crear el árbol y añadir nodos
const arbol = new Arbol();
arbol.insertar(50);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(20);
arbol.insertar(40);
arbol.insertar(60);
arbol.insertar(80);

// Añadir el árbol al DOM
const contenedorArbol = document.getElementById("arbol");
const estructuraArbol = arbol.generarHTML();
if (estructuraArbol) {
    contenedorArbol.appendChild(estructuraArbol);
}
