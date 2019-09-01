<template>
<v-app>
  <AppToolbar />
  <AppFooter /> 
</v-app>
</template>

<script>
import AppToolbar from '../components/AppToolbar';
import AppFooter from '../components/AppFooter';

export default {
  components: {
    AppToolbar,AppFooter,
  },
};
</script>
