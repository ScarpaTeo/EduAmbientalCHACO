USE [cursomvcapi]
GO

/****** Object:  Table [dbo].[Galeria]    Script Date: 28/10/2019 18:31:22 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Galeria](
	[id_galeria] [int] IDENTITY(1,1) NOT NULL,
	[foto] [image] NOT NULL,
	[id_identificador] [int] NOT NULL,
 CONSTRAINT [PK_Galeria] PRIMARY KEY CLUSTERED 
(
	[id_galeria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Galeria]  WITH CHECK ADD FOREIGN KEY([id_identificador])
REFERENCES [dbo].[Animal] ([id])
GO

