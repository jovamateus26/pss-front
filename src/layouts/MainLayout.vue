<template>
  <q-layout view="lHh Lpr lFf">
    <div class="bg-blue-1 text-bold text-green-10">
      <q-toolbar>
        <q-btn to="/" flat round dense icon="home" class="q-mr-sm" />
        <div><strong>PSS </strong>Tibagi</div>
        <q-space />
        <q-btn flat dense icon="person" label="entrar" />
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
