import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORES, PORTFOLIO } from "./datos";

export default function Contacto() {
  const [enlaceDisponible, setEnlaceDisponible] = useState(true);

  async function abrirEnlace(url: string) {
    if (!url.trim()) {
      setEnlaceDisponible(false);
      Alert.alert(
        "CV pendiente",
        "Pegá el enlace al PDF en cvUrl, dentro de src/app/datos.ts.",
      );
      return;
    }

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert("Enlace no disponible", "Revisá el enlace configurado.");
    }
  }

  return (
    <ScrollView style={s.fondo} contentContainerStyle={s.contenido}>
      <Text style={s.marca}>HABLEMOS</Text>
      <Text style={s.titulo}>Contacto</Text>
      <Text style={s.subtitulo}>
        Podés comunicarte conmigo o conocer más sobre mi perfil.
      </Text>

      <View style={s.banner}>
        <Ionicons name="chatbubble-ellipses" size={34} color="#FFFFFF" />
        <View style={s.bannerDetalle}>
          <Text style={s.bannerTitulo}>¡Estoy en contacto!</Text>
          <Text style={s.bannerTexto}>
            Elegí una opción para escribirme, llamarme o ver mi perfil.
          </Text>
        </View>
      </View>

      <Text style={s.seccion}>Mis datos</Text>

      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => [s.tarjeta, pressed && s.presionado]}
        onPress={() => abrirEnlace(`tel:${PORTFOLIO.telefono}`)}
      >
        <View style={s.icono}>
          <Ionicons
            name="call-outline"
            size={23}
            color={COLORES.principal}
          />
        </View>
        <View style={s.detalle}>
          <Text style={s.nombre}>Teléfono</Text>
          <Text style={s.descripcion}>{PORTFOLIO.telefono}</Text>
        </View>
        <Ionicons
          name="arrow-forward"
          size={20}
          color={COLORES.principal}
        />
      </Pressable>

      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => [s.tarjeta, pressed && s.presionado]}
        onPress={() => abrirEnlace(PORTFOLIO.linkedin)}
      >
        <View style={s.icono}>
          <Ionicons
            name="logo-linkedin"
            size={23}
            color={COLORES.principal}
          />
        </View>
        <View style={s.detalle}>
          <Text style={s.nombre}>LinkedIn</Text>
          <Text style={s.descripcion}>Visitá mi perfil profesional</Text>
        </View>
        <Ionicons
          name="arrow-forward"
          size={20}
          color={COLORES.principal}
        />
      </Pressable>

      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => [s.tarjeta, pressed && s.presionado]}
        onPress={() => abrirEnlace(PORTFOLIO.cvUrl)}
      >
        <View style={s.icono}>
          <Ionicons
            name="document-text-outline"
            size={23}
            color={COLORES.principal}
          />
        </View>
        <View style={s.detalle}>
          <Text style={s.nombre}>Currículum en PDF</Text>
          <Text style={s.descripcion}>
            {enlaceDisponible
              ? "Presioná para ver mi CV"
              : "Pegá el enlace al PDF en src/app/datos.ts"}
          </Text>
        </View>
        <Ionicons
          name="arrow-forward"
          size={20}
          color={COLORES.principal}
        />
      </Pressable>

      <View style={s.nota}>
        <Ionicons
          name="information-circle-outline"
          size={22}
          color={COLORES.principal}
        />
        <Text style={s.notaTexto}>
          El enlace al CV se puede agregar en el campo cvUrl de datos.ts.
        </Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: COLORES.fondo },
  contenido: { padding: 22, paddingTop: 60, paddingBottom: 35 },
  marca: { color: COLORES.principal, fontWeight: "900", letterSpacing: 1.5 },
  titulo: {
    fontSize: 32,
    fontWeight: "900",
    color: COLORES.oscuro,
    marginTop: 10,
  },
  subtitulo: {
    color: COLORES.texto,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 24,
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: COLORES.principal,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  bannerDetalle: { flex: 1 },
  bannerTitulo: { color: "#FFFFFF", fontSize: 17, fontWeight: "800" },
  bannerTexto: { color: "#F0EEFF", fontSize: 13, lineHeight: 19, marginTop: 5 },
  seccion: {
    color: COLORES.oscuro,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14,
  },
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: COLORES.tarjeta,
    borderRadius: 18,
    padding: 17,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: COLORES.borde,
  },
  presionado: { opacity: 0.75 },
  icono: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORES.suave,
    alignItems: "center",
    justifyContent: "center",
  },
  detalle: { flex: 1 },
  nombre: { color: COLORES.oscuro, fontSize: 15, fontWeight: "800" },
  descripcion: { color: COLORES.texto, lineHeight: 20, marginTop: 5, fontSize: 13 },
  nota: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    backgroundColor: COLORES.suave,
    borderRadius: 16,
    marginTop: 5,
  },
  notaTexto: { flex: 1, color: COLORES.oscuro, lineHeight: 21, fontSize: 13 },
});
