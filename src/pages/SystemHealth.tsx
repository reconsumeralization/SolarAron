import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle,
  Droplets,
  Shield,
  ThermometerSun,
  Zap,
} from 'lucide-react';

import { AnimatedHero } from '@/components';

export default function SystemHealth() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'cleaning',
      text: 'When was your last professional panel cleaning?',
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      options: ['Last month', '3-6 months ago', '6-12 months ago', 'Over a year ago'],
      tooltip: 'Regular cleaning ensures optimal heat absorption and system efficiency'
    },
    {
      id: 'temperature',
      text: 'What is your current hot water temperature?',
      icon: <ThermometerSun className="w-6 h-6 text-yellow-500" />,
      options: ['130°F+', '120-129°F', '110-119°F', 'Below 110°F'],
      tooltip: 'Aquatherm systems should maintain 120-130°F for optimal performance'
    },
    {
      id: 'pressure',
      text: 'Have you noticed any pressure issues?',
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      options: ['No issues', 'Slight variation', 'Significant drops', 'No pressure'],
      tooltip: 'Pressure issues can indicate system problems requiring immediate attention'
    },
    {
      id: 'inspection',
      text: 'Last Aquatherm certified inspection?',
      icon: <Award className="w-6 h-6 text-purple-500" />,
      options: ['Within 6 months', '6-12 months ago', 'Over a year ago', 'Never'],
      tooltip: 'Regular certified inspections maintain warranty coverage'
    },
    {
      id: 'glycol',
      text: 'When was the glycol last checked?',
      icon: <Droplets className="w-6 h-6 text-green-500" />,
      options: ['Within 6 months', '6-12 months ago', 'Over a year ago', 'Unknown'],
      tooltip: 'Glycol levels affect freeze protection and heat transfer efficiency'
    },
    {
      id: 'monitoring',
      text: 'How do you monitor system performance?',
      icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
      options: ['Digital monitoring', 'Regular checks', 'Occasional checks', 'No monitoring'],
      tooltip: 'Regular monitoring helps identify issues before they become problems'
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const getHealthScore = () => {
    let score = 100;

    // Cleaning impact
    if (answers.cleaning === 'Over a year ago') score -= 25;
    else if (answers.cleaning === '6-12 months ago') score -= 15;
    else if (answers.cleaning === '3-6 months ago') score -= 5;

    // Temperature impact
    if (answers.temperature === 'Below 110°F') score -= 35;
    else if (answers.temperature === '110-119°F') score -= 20;
    else if (answers.temperature === '120-129°F') score -= 0;

    // Pressure impact
    if (answers.pressure === 'No pressure') score -= 40;
    else if (answers.pressure === 'Significant drops') score -= 30;
    else if (answers.pressure === 'Slight variation') score -= 10;

    // Inspection impact
    if (answers.inspection === 'Never') score -= 30;
    else if (answers.inspection === 'Over a year ago') score -= 20;
    else if (answers.inspection === '6-12 months ago') score -= 10;

    // Glycol impact
    if (answers.glycol === 'Unknown') score -= 25;
    else if (answers.glycol === 'Over a year ago') score -= 20;
    else if (answers.glycol === '6-12 months ago') score -= 10;

    // Monitoring impact
    if (answers.monitoring === 'No monitoring') score -= 20;
    else if (answers.monitoring === 'Occasional checks') score -= 15;
    else if (answers.monitoring === 'Regular checks') score -= 5;

    return Math.max(score, 0);
  };

  const getRecommendations = () => {
    const recommendations = [];

    if (answers.cleaning === 'Over a year ago' || answers.cleaning === '6-12 months ago') {
      recommendations.push({
        icon: <Droplets className="w-5 h-5" />,
        text: 'Schedule an Aquatherm certified cleaning service to restore optimal heat absorption.',
        priority: answers.cleaning === 'Over a year ago' ? 'High' : 'Medium'
      });
    }

    if (answers.temperature === 'Below 110°F' || answers.temperature === '110-119°F') {
      recommendations.push({
        icon: <ThermometerSun className="w-5 h-5" />,
        text: 'Book an immediate system evaluation - your water temperature is below optimal levels.',
        priority: answers.temperature === 'Below 110°F' ? 'Critical' : 'High'
      });
    }

    if (answers.pressure !== 'No issues') {
      recommendations.push({
        icon: <Zap className="w-5 h-5" />,
        text: 'Schedule a pressure check and system inspection with our certified technicians.',
        priority: answers.pressure === 'No pressure' ? 'Critical' :
                 answers.pressure === 'Significant drops' ? 'High' : 'Medium'
      });
    }

    if (answers.inspection === 'Never' || answers.inspection === 'Over a year ago') {
      recommendations.push({
        icon: <Award className="w-5 h-5" />,
        text: 'Book an Aquatherm certified inspection to maintain warranty coverage.',
        priority: answers.inspection === 'Never' ? 'High' : 'Medium'
      });
    }

    if (answers.glycol === 'Unknown' || answers.glycol === 'Over a year ago') {
      recommendations.push({
        icon: <Droplets className="w-5 h-5" />,
        text: 'Schedule a glycol level check to ensure proper freeze protection and heat transfer.',
        priority: answers.glycol === 'Unknown' ? 'High' : 'Medium'
      });
    }

    if (answers.monitoring === 'No monitoring' || answers.monitoring === 'Occasional checks') {
      recommendations.push({
        icon: <BarChart2 className="w-5 h-5" />,
        text: 'Consider upgrading to our digital monitoring solution for real-time performance tracking.',
        priority: answers.monitoring === 'No monitoring' ? 'Medium' : 'Low'
      });
    }

    return recommendations;
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHero
        title="Solar Health Check"
        subtitle="Get a professional assessment of your solar water heating system"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">
              Solar Health Check
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Get a professional assessment of your solar water heating system
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4" />
            By an Aquatherm Certified Dealer
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                {question.icon}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{question.text}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{question.tooltip}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(question.id, option)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      answers[question.id] === option
                        ? 'border-primary bg-primary/10 shadow-md transform scale-[1.02]'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <span className="text-foreground font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {Object.keys(answers).length === questions.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 space-y-8"
          >
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-8 text-center text-foreground">System Health Score</h2>
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-5xl font-bold ${
                      getHealthScore() > 80 ? 'text-success' :
                      getHealthScore() > 50 ? 'text-warning' :
                      'text-destructive'
                    }`}>
                      {getHealthScore()}%
                    </span>
                  </div>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={getHealthScore() > 80 ? 'hsl(var(--success))' :
                             getHealthScore() > 50 ? 'hsl(var(--warning))' :
                             'hsl(var(--destructive))'}
                      strokeWidth="3"
                      strokeDasharray={`${getHealthScore()}, 100`}
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-lg font-semibold mb-6">
                {getHealthScore() > 80 ? (
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-6 h-6" />
                    <span>Your system is performing well!</span>
                  </div>
                ) : getHealthScore() > 50 ? (
                  <div className="flex items-center gap-2 text-warning">
                    <AlertTriangle className="w-6 h-6" />
                    <span>Your system needs some attention</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="w-6 h-6" />
                    <span>Your system requires immediate attention</span>
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors">
                  Schedule Maintenance
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Professional Recommendations</h2>
              </div>
              <div className="space-y-4">
                {getRecommendations().map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border"
                  >
                    <div className={`p-3 rounded-full ${
                      rec.priority === 'Critical' ? 'bg-destructive/10 text-destructive' :
                      rec.priority === 'High' ? 'bg-warning/10 text-warning' :
                      rec.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-success/10 text-success'
                    }`}>
                      {rec.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-semibold ${
                          rec.priority === 'Critical' ? 'text-destructive' :
                          rec.priority === 'High' ? 'text-warning' :
                          rec.priority === 'Medium' ? 'text-yellow-500' :
                          'text-success'
                        }`}>
                          {rec.priority} Priority
                        </span>
                      </div>
                      <p className="text-foreground">{rec.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors mx-auto">
                  Book Service Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
