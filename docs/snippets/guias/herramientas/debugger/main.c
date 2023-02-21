#include "patentes.h"
t_vector_patentes *patentes;

int main(int argc, char **argv) {
    patentes = inicializar_vector_patentes();
    agregar_patente(patentes, crear_patente("ABC", 123));
    agregar_patente(patentes, crear_patente("SQL", 035));
    agregar_patente(patentes, crear_patente("UTN", 999));
    imprimir_vector_patentes(patentes);
    destruir_vector_patentes(patentes);
    return 1;
}
