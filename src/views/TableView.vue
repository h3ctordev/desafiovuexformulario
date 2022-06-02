<template>
  <b-container class="my-5 w-75">
    <h2 class="my-5 text-center">Tabla con datos del formulario</h2>
    <v-data-table :fields="fields" :items="getForms" />
    <b-row align-h="start" class="m-5">
      <b-button variant="outline-primary" to="/" size="lg" pill>
        <b-icon icon="arrow-left"></b-icon>
        Ir a Formulario
      </b-button>
    </b-row>
  </b-container>
</template>

<script>
import VDataTable from "@/components/VDataTable.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TableView",
  components: {
    VDataTable,
  },
  data() {
    return {
      fields: [
        {
          key: "firstname",
          label: "Nombre",
          required: true,
          minlength: 2,
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Nombre es requerido",
              minlength: "Debe tener al menos 2 (dos) caracteres",
            },
          },
        },
        {
          key: "lastname",
          label: "Apellido",
          required: true,
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Apellido es requerido",
            },
          },
        },
        {
          key: "email",
          label: "Email",
          required: true,
          type: "email",
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Mail es requerido",
              email: "El Mail no es valido",
            },
          },
        },
        {
          key: "password",
          label: "Clave",
          required: true,
          type: "password",
          passwd: true,
          messages: {
            success: "Correcto!",
            errors: {
              required: "La clave es requerida",
              passwd:
                "La clave debe teenr almenos 8 caracteres, mayusculas, minusculas y un caracteres especial",
            },
          },
        },
        {
          key: "dob",
          label: "Fecha de Nacimiento",
          required: true,
          type: "date",
          messages: {
            success: "Correcto!",
            errors: {
              required: "La fecha es requerida",
            },
          },
        },
      ],
    };
  },
  async created() {
    try {
      await this.getAllforms();
      return;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    ...mapGetters("forms", ["getForms"]),
  },
  methods: {
    ...mapActions("forms", ["getAllforms"]),
  },
};
</script>

<style></style>
