import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import Localidades from "../../json/Localidades";
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";

export default function Map({ cordenadas, zoom, color, localidades }) {
  const localidadSelected = Localidades.filter(
    (Localidades) => Localidades.localidad == localidades
  );

  const fillOptions = { fillColor: color };

  const iconMarkup = renderToStaticMarkup(
    <icon size="small" variant="extended">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 16.933 16.933"
      >
        <g
          style={{
            strokeWidth: 0.811835,
          }}
        >
          <path
            d="M1.322 288.533a.265.265 0 0 0-.263.266v6.35c0 .435.357.792.793.792h8.996a.798.798 0 0 0 .795-.793v-6.35a.265.265 0 0 0-.266-.265z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#f5f6e8",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M1.322 288.533a.265.265 0 0 0-.263.266v.215c.817 1.108 1.682 2.281 2.906 2.893 1.452.726 4.018-.821 5.06.741.489.733.371 2.288.809 3.294h1.013a.799.799 0 0 0 .796-.794v-6.35a.265.265 0 0 0-.266-.265z"
            style={{
              fill: "#dbdbcf",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.646 285.357a.265.265 0 0 0-.22.12L.309 288.65a.265.265 0 0 0 .22.413h11.64a.265.265 0 0 0 .222-.413l-2.118-3.173a.265.265 0 0 0-.218-.12z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#3a4d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M5.027 292.238a.265.265 0 0 0-.265.264v3.176a.265.265 0 0 0 .265.263h2.647a.265.265 0 0 0 .263-.263v-3.176a.265.265 0 0 0-.263-.264z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#5b6571",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M4.762 291.18a.265.265 0 0 0-.264.263v1.059a.265.265 0 0 0 .264.266h3.176a.265.265 0 0 0 .263-.266v-1.059a.265.265 0 0 0-.264-.263Z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#3a4d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M8.996 291.18a.265.265 0 0 0-.266.263v2.118a.265.265 0 0 0 .266.263h1.322a.265.265 0 0 0 .266-.263v-2.118a.265.265 0 0 0-.266-.263zM2.38 291.18a.265.265 0 0 0-.263.263v2.118a.265.265 0 0 0 .264.263h1.324a.265.265 0 0 0 .264-.263v-2.118a.265.265 0 0 0-.264-.263z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#87d1ee",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.38 291.18a.265.265 0 0 0-.263.263v.612c.812.132.89 1.254 1.373 1.769h.215a.265.265 0 0 0 .264-.264v-2.117a.265.265 0 0 0-.264-.263zM8.996 291.18a.265.265 0 0 0-.266.263v.38c.37.239.903.194 1.262.374.292.146-.051 1.493.487 1.574a.265.265 0 0 0 .105-.21v-2.118a.265.265 0 0 0-.266-.263z"
            style={{
              fill: "#7dc1db",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.646 285.357a.265.265 0 0 0-.22.12l-.09.134c1.339 2.542 4.523.878 6.27 1.751.792.396 1.195 1.048 1.57 1.7h1.994a.265.265 0 0 0 .22-.411l-2.117-3.174a.265.265 0 0 0-.218-.12z"
            style={{
              fill: "#31434f",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M6.377 286.518a.258.258 0 0 0-.217.095c-.224.277-.413.371-.616.415-.202.044-.433.023-.702.006a.258.258 0 0 0-.272.232c-.076.774.008 1.459.285 2.032.278.573.751 1.022 1.397 1.32a.258.258 0 0 0 .217 0c.645-.298 1.117-.747 1.394-1.32.278-.573.363-1.258.287-2.032a.258.258 0 0 0-.272-.232c-.269.017-.5.038-.702-.006-.202-.044-.391-.138-.616-.415a.258.258 0 0 0-.183-.095z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#febe40",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M6.323 286.503a.252.252 0 0 0-.191.094c-.22.27-.405.363-.603.405-.198.043-.424.022-.686.006a.252.252 0 0 0-.267.227c-.005.054-.007.106-.011.16.891.624 2.568.642 2.762 1.03.052.104.186.63.309 1.077a2.57 2.57 0 0 0 .16-.28c.272-.56.355-1.23.281-1.987a.252.252 0 0 0-.266-.227c-.263.017-.488.037-.686-.006-.198-.042-.383-.135-.603-.405a.252.252 0 0 0-.178-.093.252.252 0 0 0-.021 0z"
            style={{
              fill: "#e5ab38",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.646 285.357a.265.265 0 0 0-.22.12L.309 288.65a.265.265 0 0 0 .22.412h.53v5.54a.265.265 0 0 0 0 .016v.53c0 .092.019.18.048.263H1.06a.265.265 0 0 0-.266.266.265.265 0 0 0 .266.264H11.643a.265.265 0 0 0 .263-.264.265.265 0 0 0-.263-.266h-.05c.03-.083.05-.17.05-.264v-6.086h.527a.265.265 0 0 0 .22-.411l-2.117-3.174a.265.265 0 0 0-.218-.12zm.14.53h7.126l1.764 2.646H8.148c.085-.414.1-.868.053-1.357a.265.265 0 0 0-.279-.238c-.276.017-.513.038-.723-.006-.188-.04-.37-.131-.575-.353a.265.265 0 0 0-.08-.11.265.265 0 0 0-.157-.06.265.265 0 0 0-.016 0 .265.265 0 0 0-.006 0 .265.265 0 0 0-.183.06.265.265 0 0 0-.078.107c-.207.224-.388.316-.577.356-.21.045-.446.023-.722.006a.265.265 0 0 0-.28.238c-.047.49-.032.943.053 1.358H1.025Zm3.577 1.18c.236.211.484.33.725.382.203.043.374.021.554.012.028.604-.01 1.153-.212 1.568-.216.442-.559.788-1.067 1.046-.507-.258-.851-.604-1.066-1.046-.203-.415-.242-.964-.215-1.568.18.01.354.032.556-.012.241-.051.49-.171.725-.383zm-4.775 1.996h3.146c.027.067.055.134.086.199.273.559.73 1.001 1.349 1.306a.265.265 0 0 0 .19.073.265.265 0 0 0 .202-.075c.616-.305 1.072-.747 1.343-1.305.032-.064.06-.131.087-.199h3.123v5.292H7.937v-1.586a.265.265 0 0 0 .264-.266v-1.059a.265.265 0 0 0-.264-.263H4.761a.265.265 0 0 0-.263.263v1.06a.265.265 0 0 0 .263.265v1.586H1.588Zm.793 2.117a.265.265 0 0 0-.264.263v1.852a.265.265 0 0 0-.265.265.265.265 0 0 0 .265.264H3.97a.265.265 0 0 0 .263-.264.265.265 0 0 0-.263-.265v-1.852a.265.265 0 0 0-.264-.263zm6.615 0a.265.265 0 0 0-.266.263v1.852a.265.265 0 0 0-.263.265.265.265 0 0 0 .263.264h1.854a.265.265 0 0 0 .263-.264.265.265 0 0 0-.263-.265v-1.852a.265.265 0 0 0-.266-.263zm-6.35.529h.794v1.586h-.794Zm2.382 0h2.646v.53H5.028Zm4.232 0h.795v1.586H9.26Zm-3.969 1.059h.795v1.056a.265.265 0 0 0-.266.266.265.265 0 0 0 .266.264v1.058H5.29Zm1.324 0h.793v2.644h-.793v-1.058a.265.265 0 0 0 .264-.264.265.265 0 0 0-.264-.266zm-5.027 2.115h3.173v.529h-2.91a.259.259 0 0 1-.263-.264zm6.35 0h3.176v.265c0 .15-.117.264-.267.264h-2.91z"
            style={{
              color: "#000",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontSize: "medium",
              lineHeight: "normal",
              fontFamily: "sans-serif",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              textIndent: 0,
              textAlign: "start",
              textDecoration: "none",
              textDecorationLine: "none",
              textDecorationStyle: "solid",
              textDecorationColor: "#000",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              writingMode: "lr-tb",
              direction: "ltr",
              textOrientation: "mixed",
              dominantBaseline: "auto",
              baselineShift: "baseline",
              textAnchor: "start",
              whiteSpace: "normal",
              shapePadding: 0,
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
              colorRendering: "auto",
              imageRendering: "auto",
              shapeRendering: "auto",
              textRendering: "auto",
              enableBackground: "accumulate",
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
        </g>
      </svg>
    </icon>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  const state = {
    lat: 4.720810000681808,
    lng: -74.04678300123385,
    zoom: 5,
  };

  console.log(localidadSelected.length);

  return (
    <MapContainer
      className="w-full h-[50em]"
      center={cordenadas}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        {localidadSelected.length != 0 && localidadSelected[0].cais?.map((element) => (
          <>
            <Marker
              position={[
                element.geo_shape != null && element.geo_shape.coordinates[1],
                element.geo_shape != null && element.geo_shape.coordinates[0],
              ]}
              icon={customMarkerIcon}
            />
          </>
        ))}

        <Circle
          center={cordenadas}
          pathOptions={fillOptions}
          radius={5000}
          stroke={false}
        />
      </LayerGroup>
    </MapContainer>
  );
}
