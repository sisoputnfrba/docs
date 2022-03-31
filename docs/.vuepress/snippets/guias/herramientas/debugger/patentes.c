#include "patentes.h"

t_patente* crear_patente(char* letras, int numeros){
    t_patente* ret = malloc(sizeof(t_patente));
    ret->letras = strdup(letras);
    ret->numero = numeros;
    return ret;
}
