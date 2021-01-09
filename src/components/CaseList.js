import React, { useState, useEffect } from "react";
import CaseDataService from "../services/CaseService"
import './CaseList.css';

  const [cases, setCases] = useState([]);
  const [currentCase, setCurrentCase] = useState(null);
  const [message, setMessage] = useState("");
