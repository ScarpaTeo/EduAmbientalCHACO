USE [cursomvcapi]
GO

/****** Object:  Table [dbo].[Animal]    Script Date: 28/10/2019 18:31:05 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Animal](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](200) NOT NULL,
	[subtitulo] [varchar](250) NOT NULL,
	[detalle] [varchar](max) NOT NULL,
	[categoria] [int] NULL,
	[tags] [varchar](250) NULL,
	[picture] [image] NULL,
 CONSTRAINT [PK_Animal] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

