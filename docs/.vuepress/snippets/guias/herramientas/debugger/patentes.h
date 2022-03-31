#ifndef PATENTES_H_
#define PATENTES_H_

typedef struct patentes t_vector_patentes;

typedef struct {
  char *letras;
  int numero;
} t_patente;

t_vector_patentes *inicializar_vector_patentes();
t_patente *crear_patente(char *letras, int numeros);
void agregar_patente(t_vector_patentes *patentes, t_patente *patente);
void imprimir_vector_patentes(t_vector_patentes *patentes);
void destruir_vector_patentes(t_vector_patentes *patentes);


#endif
