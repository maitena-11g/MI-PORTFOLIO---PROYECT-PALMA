
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORES, PORTFOLIO } from "./datos";

const porcentajes: Record<string, number> = {
  Inicial: 25,
  "En formación": 40,
  Básico: 40,
  Intermedio: 65,
  Avanzado: 85,
  "B2+": 95,
  Experto: 100,
};

export default function Habilidades() {
  return (
    <ScrollView style={s.fondo} contentContainerStyle={s.contenido}>
      <Text style={s.marca}>LO QUE SÉ HACER</Text>
      <Text style={s.titulo}>Habilidades</Text>
      <Text style={s.subtitulo}>
        Capacidades que desarrollo a través del estudio y la práctica.
      </Text>

      <View style={s.banner}>
        <Ionicons name="bulb" size={34} color="#FFFFFF" />
        <View style={{ flex: 1 }}>
          <Text style={s.bannerTitulo}>En constante evolución</Text>
          <Text style={s.bannerTexto}>
            Cada proyecto es una oportunidad para mejorar.
          </Text>
        </View>
      </View>

      <Text style={s.seccion}>Mis habilidades</Text>

      {PORTFOLIO.habilidades.map((habilidad, index) => {
        const porcentaje = porcentajes[habilidad.nivel] ?? 40;
        return (
          <View style={s.tarjeta} key={`${habilidad.nombre}-${index}`}>
            <View style={s.fila}>
              <View style={s.icono}>
                <Ionicons
                  name={
                    index === 0
                      ? "people-outline"
                      : index === 1
                        ? "chatbubbles-outline"
                        : index === 2
                          ? "construct-outline"
                          : index === 3
                            ? "code-slash-outline"
                            : "globe-outline"
                  }
                  size={22}
                  color={COLORES.principal}
                />
              </View>
              <View style={s.detalle}>
                <Text style={s.nombre}>{habilidad.nombre}</Text>
                <Text style={s.nivel}>{habilidad.nivel}</Text>
              </View>
            </View>
            <View style={s.barraFondo}>
              <View style={[s.barra, { width: `${porcentaje}%` }]} />
            </View>
          </View>
        );
      })}

      <View style={s.nota}>
        <Ionicons name="trending-up-outline" size={23} color={COLORES.principal} />
        <Text style={s.notaTexto}>
          Los niveles son orientativos. Actualizalos según tu experiencia real.
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
  },
  bannerTitulo: { color: "#FFFFFF", fontSize: 17, fontWeight: "800" },
  bannerTexto: { color: "#F0EEFF", fontSize: 13, lineHeight: 19, marginTop: 5 },
  seccion: {
    color: COLORES.oscuro,
    fontSize: 20,
    fontWeight: "800",
    marginTop: 27,
    marginBottom: 14,
  },
  tarjeta: {
    backgroundColor: COLORES.tarjeta,
    padding: 17,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORES.borde,
    marginBottom: 13,
  },
  fila: { flexDirection: "row", alignItems: "center", gap: 13 },
  icono: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: COLORES.suave,
    alignItems: "center",
    justifyContent: "center",
  },
  detalle: { flex: 1 },
  nombre: { color: COLORES.oscuro, fontSize: 15, fontWeight: "800" },
  nivel: { color: COLORES.texto, fontSize: 12, marginTop: 4 },
  barraFondo: {
    height: 7,
    backgroundColor: "#ECECF4",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 17,
  },
  barra: {
    height: "100%",
    backgroundColor: COLORES.principal,
    borderRadius: 5,
  },
  nota: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    backgroundColor: COLORES.suave,
    borderRadius: 16,
    marginTop: 7,
  },
  notaTexto: { flex: 1, color: COLORES.oscuro, lineHeight: 21, fontSize: 13 },
});
