#include "lector.h"

#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <sys/stat.h>

int obtener_size(char* path) {
    struct stat stat_file;
    stat(path, &stat_file);
    return stat_file.st_size;
}

char* leer(char* path) {
    FILE* archivo = fopen(path, "r");
    if (archivo == NULL) {
        return NULL;
    }
    int size = obtener_size(path);

    char* texto = malloc(size + 1);
    fread(texto, size, sizeof(char), archivo);
    fclose(archivo);
    texto[size] = '\0';

    return texto;
}

int archivo_contar(char* path, char c) {
    char* contenido = leer(path);
    if (contenido == NULL) {
        return - 1;
    }

    int cantidad = 0;
    for (int i = 1; i < strlen(contenido); i++) {
        if (contenido[i] == c) {
            cantidad++;
        }
    }

    return cantidad;
}
