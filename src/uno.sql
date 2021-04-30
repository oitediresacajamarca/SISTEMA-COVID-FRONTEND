USE [BD_VACUNACION_COVID]
GO

/****** Object:  Table [dbo].[PADRON_CITA_CUTERVO]    Script Date: 29/04/2021 09:29:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PADRON_CITA_CUTERVO](
	[NRO] [int] NULL,
	[Tipo_de_Documento] [int] NULL,
	[Numero_de_Documento] [int] NULL,
	[Nombres] [varchar](300) NULL,
	[Apellido_Paterno] [varchar](300) NULL,
	[Apellido_Materno] [varchar](300) NULL,
	[Codigo_EESS] [varchar](300) NULL,
	[Nombre_EESS] [varchar](300) NULL,
	[Departamento] [varchar](300) NULL,
	[Provincia] [varchar](300) NULL,
	[Distrito] [varchar](300) NULL,
	[Fase] [varchar](300) NULL,
	[Sub_Fase] [varchar](300) NULL,
	[Fuente_Datos] [varchar](300) NULL,
	[Edad] [int] NULL,
	[Departamento_RENIEC] [varchar](300) NULL,
	[Provincia_RENIEC] [varchar](300) NULL,
	[Distrito_RENIEC] [varchar](300) NULL,
	[Direccion_RENIEC] [varchar](300) NULL,
	[RENAES_SIS] [varchar](300) NULL,
	[EESS_SIS] [varchar](300) NULL,
	[MICRORRED_SIS] [varchar](300) NULL,
	[SEXO] [varchar](10) NULL,
	[FECHA_NACIMIENTO] [varchar](300) NULL,
	[punto_de_vacunacion] [varchar](300) NULL,
	[fecha] [varchar](300) NULL,
	[HORA] [varchar](300) NULL
) ON [PRIMARY]
GO


