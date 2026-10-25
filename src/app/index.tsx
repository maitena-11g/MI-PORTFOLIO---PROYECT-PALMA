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

export default function Inicio() {
  const [mensaje, setMensaje] = useState(false);

  async function abrirEnlace(url: string) {
    if (!url.trim()) {
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
      <View style={s.encabezado}>
        <Text style={s.marca}>MI PORTFOLIO</Text>
        <View style={s.etiqueta}>
          <View style={s.punto} />
          <Text style={s.etiquetaTexto}>Portfolio personal</Text>
        </View>
      </View>

      <View style={s.hero}>
        <View style={s.avatar}>
          <Ionicons name="person" size={62} color={COLORES.principal} />
        </View>

        <Text style={s.saludo}>¡Hola! Soy</Text>
        <Text style={s.nombre}>{PORTFOLIO.nombre}</Text>
        <Text style={s.titulo}>{PORTFOLIO.titulo}</Text>
        <Text style={s.ubicacion}>
          <Ionicons name="location-outline" size={15} /> {PORTFOLIO.ubicacion}
        </Text>

        <Text style={s.presentacion}>{PORTFOLIO.presentacion}</Text>

        <Pressable
          style={s.boton}
          onPress={() => abrirEnlace(PORTFOLIO.cvUrl)}
        >
          <Ionicons name="document-text-outline" size={19} color="#FFFFFF" />
          <Text style={s.botonTexto}>Ver mi CV</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </Pressable>

        <Pressable
          style={s.botonSecundario}
          onPress={() => abrirEnlace(PORTFOLIO.linkedin)}
        >
          <Ionicons name="logo-linkedin" size={19} color={COLORES.principal} />
          <Text style={s.botonSecundarioTexto}>Mi LinkedIn</Text>
        </Pressable>
      </View>

      <Text style={s.seccion}>Un poco sobre mí</Text>
      <View style={s.tarjeta}>
        <View style={s.icono}>
          <Ionicons name="rocket-outline" size={25} color={COLORES.principal} />
        </View>
        <View style={s.tarjetaTexto}>
          <Text style={s.tarjetaTitulo}>Siempre aprendiendo</Text>
          <Text style={s.descripcion}>
            Me gusta descubrir cosas nuevas, enfrentar desafíos y convertir
            ideas en proyectos.
          </Text>
        </View>
      </View>

      <Pressable
        style={s.tarjeta}
        onPress={() => setMensaje(!mensaje)}
      >
        <View style={s.icono}>
          <Ionicons name="heart-outline" size={25} color={COLORES.principal} />
        </View>
        <View style={s.tarjetaTexto}>
          <Text style={s.tarjetaTitulo}>Mis intereses</Text>
          <Text style={s.descripcion}>
            Tecnología, Ciencia de Datos, analisis de negocio y creatividad.
          </Text>
          {mensaje && (
            <Text style={s.descripcion}>
              Me interesa aprender sobre Inteligencia Artificial, Machine Learning, Big Data, desarrollo de software y procesos corporativos.
            </Text>
          )}
        </View>
        <Ionicons
          name={mensaje ? "chevron-up" : "chevron-down"}
          size={20}
          color={COLORES.texto}
        />
      </Pressable>

      <Text style={s.pie}>Gracias por visitar mi portfolio.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: COLORES.fondo },
  contenido: { padding: 22, paddingTop: 58, paddingBottom: 35 },
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  marca: { color: COLORES.oscuro, fontWeight: "900", letterSpacing: 1.5 },
  etiqueta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5F7EC",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },
  punto: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#239957",
    marginRight: 6,
  },
  etiquetaTexto: { fontSize: 11, color: "#237345", fontWeight: "600" },
  hero: {
    backgroundColor: COLORES.tarjeta,
    borderRadius: 25,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORES.borde,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 60,
    backgroundColor: COLORES.suave,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 19,
    borderWidth: 4,
    borderColor: "#F7F5FF",
  },
  saludo: { color: COLORES.texto, fontSize: 15 },
  nombre: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORES.oscuro,
    textAlign: "center",
    marginTop: 5,
  },
  titulo: {
    fontSize: 14,
    color: COLORES.principal,
    textAlign: "center",
    marginTop: 9,
    fontWeight: "700",
  },
  ubicacion: { color: COLORES.texto, fontSize: 13, marginTop: 12 },
  presentacion: {
    color: COLORES.texto,
    textAlign: "center",
    lineHeight: 23,
    marginTop: 20,
    marginBottom: 22,
  },
  boton: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORES.principal,
    padding: 15,
    borderRadius: 14,
    width: "100%",
  },
  botonTexto: { color: "#FFFFFF", fontWeight: "700", flex: 1 },
  botonSecundario: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    marginTop: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORES.borde,
    width: "100%",
  },
  botonSecundarioTexto: { color: COLORES.principal, fontWeight: "700" },
  seccion: {
    color: COLORES.oscuro,
    fontSize: 20,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 13,
  },
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    backgroundColor: COLORES.tarjeta,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORES.borde,
    marginBottom: 12,
  },
  icono: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORES.suave,
    alignItems: "center",
    justifyContent: "center",
  },
  tarjetaTexto: { flex: 1 },
  tarjetaTitulo: {
    color: COLORES.oscuro,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 5,
  },
  descripcion: { color: COLORES.texto, fontSize: 13, lineHeight: 20 },
  pie: { textAlign: "center", color: COLORES.texto, marginTop: 20, fontSize: 12 },
});