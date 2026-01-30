'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeExample {
  title: string;
  description: string;
  language: string;
  code: string;
  icon: string;
}

export default function CodeExamplesSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const codeExamples: CodeExample[] = [
    {
      title: 'Intelligent Email Processing',
      description: 'AI-powered email classification and routing with OpenAI GPT-4',
      language: 'Python',
      icon: 'EnvelopeIcon',
      code: `from openai import OpenAI
import asyncio

class EmailProcessor:
    def __init__(self, api_key: str):
        self.client = OpenAI(api_key=api_key)
    
    async def classify_email(self, email_content: str) -> dict:
        """Classify email intent and extract key information"""
        response = await self.client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are an email classification expert."},
                {"role": "user", "content": f"Classify this email: {email_content}"}
            ],
            temperature=0.3
        )
        
        return {
            "category": response.choices[0].message.content,
            "priority": self._calculate_priority(response),
            "action_required": True
        }
    
    def _calculate_priority(self, response) -> str:
        # Priority logic based on AI analysis
        return "high" if "urgent" in response.lower() else "normal"`
    },
    {
      title: 'Automated Data Pipeline',
      description: 'Scalable ETL pipeline with error handling and monitoring',
      language: 'Python',
      icon: 'ArrowPathIcon',
      code: `from celery import Celery
from typing import List, Dict
import logging

app = Celery('data_pipeline', broker='redis://localhost:6379')
logger = logging.getLogger(__name__)

@app.task(bind=True, max_retries=3)
def process_data_batch(self, data_batch: List[Dict]) -> Dict:
    """Process data batch with automatic retry on failure"""
    try:
        # Extract
        raw_data = extract_from_source(data_batch)
        
        # Transform
        transformed_data = transform_data(raw_data)
        
        # Load
        load_to_warehouse(transformed_data)
        
        logger.info(f"Successfully processed {len(data_batch)} records")
        return {"status": "success", "records": len(data_batch)}
        
    except Exception as exc:
        logger.error(f"Batch processing failed: {exc}")
        raise self.retry(exc=exc, countdown=60)

def extract_from_source(batch: List[Dict]) -> List[Dict]:
    # Data extraction logic
    return [validate_record(record) for record in batch]`
    },
    {
      title: 'Real-time API Integration',
      description: 'FastAPI endpoint with async processing and validation',
      language: 'Python',
      icon: 'BoltIcon',
      code: `from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, validator
from typing import Optional
import asyncio

app = FastAPI(title="Automation API", version="2.0")

class AutomationRequest(BaseModel):
    workflow_id: str
    parameters: dict
    priority: Optional[str] = "normal"
    
    @validator('priority')
    def validate_priority(cls, v):
        if v not in ['low', 'normal', 'high']:
            raise ValueError('Invalid priority level')
        return v

@app.post("/api/v1/execute")
async def execute_workflow(
    request: AutomationRequest,
    background_tasks: BackgroundTasks
):
    """Execute automation workflow asynchronously"""
    try:
        # Validate workflow exists
        workflow = await get_workflow(request.workflow_id)
        
        # Queue for background processing
        background_tasks.add_task(
            process_workflow,
            workflow,
            request.parameters
        )
        
        return {
            "status": "queued",
            "workflow_id": request.workflow_id,
            "estimated_time": "2-5 minutes"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`
    },
    {
      title: 'Database Optimization',
      description: 'Efficient database queries with connection pooling',
      language: 'Python',
      icon: 'CircleStackIcon',
      code: `from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker
from contextlib import contextmanager
import asyncpg

class DatabaseManager:
    def __init__(self, connection_string: str):
        self.engine = create_engine(
            connection_string,
            pool_size=20,
            max_overflow=40,
            pool_pre_ping=True
        )
        self.SessionLocal = sessionmaker(bind=self.engine)
    
    @contextmanager
    def get_session(self):
        """Context manager for database sessions"""
        session = self.SessionLocal()
        try:
            yield session
            session.commit()
        except Exception:
            session.rollback()
            raise
        finally:
            session.close()
    
    async def bulk_insert(self, records: list) -> int:
        """Optimized bulk insert with batching"""
        batch_size = 1000
        inserted = 0
        
        for i in range(0, len(records), batch_size):
            batch = records[i:i + batch_size]
            with self.get_session() as session:
                session.bulk_insert_mappings(Record, batch)
                inserted += len(batch)
        
        return inserted`
    }
  ];

  if (!isHydrated) {
    return (
      <section id="code-examples" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-4">
              <Icon name="CommandLineIcon" size={20} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Code Transparency</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
              Real <span className="text-primary">Implementation Examples</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore production-ready code that powers intelligent automation systems
            </p>
          </div>
          <div className="glassmorphism rounded-xl overflow-hidden">
            <div className="bg-muted/30 border-b border-border p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-8">
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="CodeBracketIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading code examples...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="code-examples" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glassmorphism rounded-full mb-4">
            <Icon name="CommandLineIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Code Transparency</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Real <span className="text-primary">Implementation Examples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore production-ready code that powers intelligent automation systems
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          {codeExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary text-primary-foreground shadow-interactive'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={example.icon as any} size={20} />
              <span>{example.title}</span>
            </button>
          ))}
        </div>

        <div className="glassmorphism rounded-xl overflow-hidden">
          <div className="bg-muted/30 border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="DocumentTextIcon" size={16} />
              <span>{codeExamples[activeTab].language}</span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                {codeExamples[activeTab].title}
              </h3>
              <p className="text-muted-foreground">{codeExamples[activeTab].description}</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-foreground font-mono leading-relaxed">
                <code>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="CheckCircleIcon" size={32} className="text-success mx-auto mb-3" />
            <h4 className="text-lg font-bold text-foreground mb-2 font-heading">Type Safe</h4>
            <p className="text-sm text-muted-foreground">Full TypeScript/Python type annotations for reliability</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="ShieldCheckIcon" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="text-lg font-bold text-foreground mb-2 font-heading">Error Handling</h4>
            <p className="text-sm text-muted-foreground">Comprehensive error handling and retry logic</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <Icon name="DocumentCheckIcon" size={32} className="text-secondary mx-auto mb-3" />
            <h4 className="text-lg font-bold text-foreground mb-2 font-heading">Well Documented</h4>
            <p className="text-sm text-muted-foreground">Clear documentation and inline comments</p>
          </div>
        </div>
      </div>
    </section>
  );
}