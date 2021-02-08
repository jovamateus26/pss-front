<template>
  <q-layout view="lHh Lpr lFf">
    <div class="bg-blue-1 text-bold text-green-10">
      <q-toolbar>
        <div class="col-md-2 col-xs-0"></div>
        <q-btn to="/" flat round dense icon="home" class="q-mr-sm" />
        <div><strong>PSS </strong>Tibagi</div>
        <q-space />
        <q-btn :to="{ name: 'inscricaoUsuario'}" flat dense icon="person" label="minhas inscrições" />
        <div class="col-md-2 col-xs-0"></div>
      </q-toolbar>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
