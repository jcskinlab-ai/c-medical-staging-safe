/* ════════════════════════════════════════════════════════════════════════
 * jcm_saas_config.js — Configuración del proyecto Firebase del SaaS (UN solo
 * proyecto que sirve a TODAS las clínicas).
 *
 * ⚠️ ESTO NO ES UN SECRETO: la "config web" de Firebase (apiKey, projectId…)
 * es pública por diseño y va en el código del navegador. La seguridad NO
 * depende de esta clave, sino del login (Auth) y de las Reglas de Firestore.
 *
 * Mientras esté vacía, la app funciona en modo local (mono-clínica) como hoy.
 * ════════════════════════════════════════════════════════════════════════ */
window.JCSAAS_CONFIG = {
  // Staging-safe default: leave empty to run in local mono-clinic mode.
  // Replace these values only after creating a separate Firebase project.
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  appCheckKey: "",
  mfa: false
};

/* Mapa dominio -> clinica: en staging queda vacio para no enlazar datos reales.
 * Cuando exista un Firebase separado, agrega aqui el dominio y clinicId de prueba. */
window.JCSAAS_HOSTS = {};
