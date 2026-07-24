# NEXUS: Tokenización Institucional de RWA (Sinergia Beicad - Tenui)

## 1. Descripción General
NEXUS es una plataforma Web3 de grado institucional para la tokenización de Activos del Mundo Real (RWA). Orquesta el financiamiento de la planta DMP 5.000 AP de Beicad S.A., tecnología que utiliza plasma a >5.000 °C para erradicar pasivos ambientales y generar energía limpia. La plataforma integra la infraestructura global de pagos de Tenui para el procesamiento de dividendos fiduciarios (vía Payoneer) y la gestión del cumplimiento normativo (KYC/AML) de los inversores.

## 2. Arquitectura de Contratos
Nuestra arquitectura EVM está programada en **Vyper** y se compone de tres pilares fundamentales:
* **Seguridad y Resiliencia (Proxy UUPS):** Implementamos el estándar ERC-1967. Separamos el almacenamiento de la lógica para permitir actualizaciones regulatorias sin riesgo de pérdida de datos o fondos. Compilamos en versiones de Vyper (`v0.4.2+`) que mitigan de forma nativa históricos bugs de reentrada en la asignación de *storage slots*.
* **Cumplimiento (ERC-3643 T-REX):** Cada token RWA exige validación dinámica antes de transferirse (`canTransfer()`), consultando un *Identity Registry* (ERC-734/735) administrado por Tenui.
* **Gestión de Saldos (ERC-1410):** Uso de particiones lógicas para gestionar períodos de bloqueo (*vesting*) del capital.

## 3. Prerrequisitos de Entorno
* **Python 3.10+** y **Vyper Compiler** (`v0.4.2+`).
* **Titanoboa** o **Foundry** para la ejecución de pruebas unitarias.
* **Node.js v18+** para instanciar el *Bundler* local.

## 4. Guía de Instalación y Testeo Local
```bash
# 1. Clonar el repositorio
git clone [https://github.com/nexus-rwa/core-contracts.git](https://github.com/nexus-rwa/core-contracts.git)
cd core-contracts

# 2. Configurar entorno virtual e instalar dependencias
python3 -m venv venv
source venv/bin/activate
pip install vyper titanoboa pytest

# 3. Compilar los contratos
vyper contracts/NexusImplementation.vy
vyper contracts/NexusProxy_UUPS.vy
vyper contracts/IdentityRegistry.vy

# 4. Ejecutar suite de pruebas
pytest tests/