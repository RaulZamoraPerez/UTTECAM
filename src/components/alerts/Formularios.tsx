import React from 'react';
import {
  CheckCircle,
  AlertTriangle,
  X,
  Info
} from "lucide-react";

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose: () => void;
  isVisible: boolean;
}

const CustomAlert: React.FC<AlertProps> = ({ type, title, message, onClose, isVisible }) => {
  if (!isVisible) return null;

  const alertStyles = {
    success: {
      border: 'border-green-500',
      icon: <CheckCircle className="text-green-600" size={24} />,
      titleColor: 'text-green-800',
      messageColor: 'text-green-700',
      closeButton: 'text-green-600 hover:text-green-800'
    },
    error: {
      border: 'border-red-500',
      icon: <AlertTriangle className="text-red-600" size={24} />,
      titleColor: 'text-red-800',
      messageColor: 'text-red-700',
      closeButton: 'text-red-600 hover:text-red-800'
    },
    warning: {
      border: 'border-yellow-500',
      icon: <AlertTriangle className="text-yellow-600" size={24} />,
      titleColor: 'text-yellow-800',
      messageColor: 'text-yellow-700',
      closeButton: 'text-yellow-600 hover:text-yellow-800'
    },
    info: {
      border: 'border-blue-500',
      icon: <Info className="text-blue-600" size={24} />,
      titleColor: 'text-blue-800',
      messageColor: 'text-blue-700',
      closeButton: 'text-blue-600 hover:text-blue-800'
    }
  };

  const style = alertStyles[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className={`bg-white ${style.border} border-2 rounded-2xl p-6 m-4 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 pointer-events-auto`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {style.icon}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold ${style.titleColor} mb-2`}>
              {title}
            </h3>
            <p className={`text-sm ${style.messageColor} leading-relaxed`}>
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`flex-shrink-0 ${style.closeButton} transition-colors duration-200 p-1 rounded-full hover:bg-gray-100`}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Hook personalizado para usar las alertas
export const useAlert = () => {
  const [alert, setAlert] = React.useState<{
    isVisible: boolean;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
  }>({
    isVisible: false,
    type: 'info',
    title: '',
    message: ''
  });

  // Función para mostrar alertas
  const showAlert = (type: 'success' | 'error' | 'warning' | 'info', title: string, message: string) => {
    setAlert({
      isVisible: true,
      type,
      title,
      message
    });

    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
      setAlert(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const closeAlert = () => {
    setAlert(prev => ({ ...prev, isVisible: false }));
  };

  const AlertComponent = () => (
    <CustomAlert
      type={alert.type}
      title={alert.title}
      message={alert.message}
      onClose={closeAlert}
      isVisible={alert.isVisible}
    />
  );

  return {
    showAlert,
    closeAlert,
    AlertComponent,
    alert
  };
};

export default CustomAlert;