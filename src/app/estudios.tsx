
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORES, PORTFOLIO } from "./datos";

export default function Estudios() {
  return (
    <ScrollView style={s.fondo} contentContainerStyle={s.contenido}>
      <Text style={s.marca}>MI FORMACIÓN</Text>
      <Text style={s.titulo}>Estudios</Text>
      <Text style={s.subtitulo}>
        Los conocimientos que estoy construyendo para mi futuro.
      </Text>

      <View style={s.banner}>
        <Ionicons name="school" size={34} color="#FFFFFF" />
        <View style={{ flex: 1 }}>
          <Text style={s.bannerTitulo}>Aprender para crecer</Text>
          <Text style={s.bannerTexto}>
            Formación académica, cursos y nuevas experiencias.
          </Text>
        </View>
      </View>

      {PORTFOLIO.estudios.map((item, index) => (
        <View style={s.tarjeta} key={`${item.institucion}-${index}`}>
          <View style={s.icono}>
            <Ionicons
              name={index === 0 ? "school-outline" : "ribbon-outline"}
              size={25}
              color={COLORES.principal}
            />
          </View>
          <View style={s.detalle}>
            <Text style={s.periodo}>{item.periodo}</Text>
            <Text style={s.carrera}>{item.carrera}</Text>
            <Text style={s.institucion}>{item.institucion}</Text>
            <Text style={s.descripcion}>{item.descripcion}</Text>
          </View>
        </View>
      ))}

      <View style={s.nota}>
        <Ionicons
          name="book-outline"
          size={22}
          color={COLORES.principal}
        />
        <Text style={s.notaTexto}>
          La formación continua es parte de mi camino profesional.
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
  bannerTitulo: { color: "#FFFFFF", fontSize: 17, fontWeight: "800" },
  bannerTexto: { color: "#F0EEFF", fontSize: 13, lineHeight: 19, marginTop: 5 },
  tarjeta: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    backgroundColor: COLORES.tarjeta,
    borderRadius: 18,
    padding: 17,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORES.borde,
  },
  icono: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORES.suave,
    alignItems: "center",
    justifyContent: "center",
  },
  detalle: { flex: 1 },
  periodo: {
    color: COLORES.principal,
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 7,
  },
  carrera: { color: COLORES.oscuro, fontSize: 16, fontWeight: "800" },
  institucion: { color: COLORES.texto, marginTop: 5, fontSize: 13 },
  descripcion: { color: COLORES.texto, lineHeight: 20, marginTop: 10, fontSize: 13 },
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
